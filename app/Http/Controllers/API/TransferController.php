<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\Transfers\VideoTransfer;
use App\Http\Controllers\API\Transfers\AudioTransfer;
use App\Http\Requests\FileUpload;
use App\Jobs\UploadAudio;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class TransferController extends Controller
{

    /**
     * FilesController constructor.
     *
     */
    public function __construct() {
    }

    /**
     * Our main entry point
     *
     * @param FileUpload $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function transfer(FileUpload $request) {
        $file = $request->file('file');

        if ($file->isValid()) {
            //TODO:: Fix the virus scanner
            //$this->virusScan($request->all())->validate();

            switch ($file->getMimeType())
            {
                // Audio File
                case 'audio/mpeg': case 'audio/x-m4a': case 'audio/midi':
                case 'audio/mp4': case 'audio/ogg': case 'audio/s3m':
                case 'audio/silk': case 'audio/vnd.dece.audio': case 'audio/vnd.digital-winds':
                case 'audio/vnd.dra': case 'audio/vnd.dts': case 'audio/vnd.dts.hd':
                case 'audio/vnd.lucent.voice': case 'audio/vnd.ms-playready.media.pya': case 'audio/vnd.nuera.ecelp4800':
                case 'audio/vnd.nuera.ecelp7470': case 'audio/vnd.nuera.ecelp9600': case 'audio/vnd.rip':
                case 'audio/webm': case 'audio/x-aac': case 'audio/x-aiff':
                case 'audio/x-caf': case 'audio/x-flac': case 'audio/x-matroska':
                case 'audio/x-mpegurl': case 'audio/x-ms-wax': case 'audio/x-ms-wma':
                case 'audio/x-pn-realaudio': case 'audio/x-pn-realaudio-plugin': case 'audio/x-wav':
                case 'audio/xm':
                	UploadAudio::dispatch($file);
                    break;
                // Video File
                case'video/3gpp':case'video/3gpp2':case'video/h261':
                case'video/h263':case'video/h264':case'video/jpeg':
                case'video/jpm':case'video/mj2':case'video/mp4':
                case'video/mpeg':case'video/ogg':case'video/quicktime':
                case'video/vnd.dece.hd':case'video/vnd.dece.mobile':
                case'video/vnd.dece.pd':case'video/vnd.dece.sd':
                case'video/vnd.dece.video':case'video/vnd.dvb.file':
                case'video/vnd.fvt':case'video/vnd.mpegurl':
                case'video/vnd.ms-playready.media.pyv':case'audio/x-wave':
                case'video/vnd.uvvu.mp4':case'video/vnd.vivo':case'video/webm':
                case'video/x-f4v':case'video/x-fli':case'video/x-flv':
                case'video/x-m4v':case'video/x-matroska':case'video/x-mng':
                case'video/x-ms-asf':case 'video/x-ms-vob':case'video/x-ms-wm':
                case'video/x-ms-wmv':case'video/wx-ms-wmx':case'video/x-msvideo':
                case'video/x-sgi-movie':case'video/x-smv':case'video/x-cooltalk':
                    $videoTransfer = new VideoTransfer($file);
                    $videoTransfer->transfer();
                    break;
                default:
                    Log::debug('Unclassified mime: '.$file->getMimeType());
                    return response()->json(['error' => 'Unsupported media type'], 415);
            }
            return response()->json(['success' => 'File Sent for processing'], 200);
        }else {
            Log::error('File Invalid');
            return response()->json(['error' => 'Trouble with upload. Invalid file'], 400);
        }
    }

    /**
     * Virus scanner used via validator.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function virusScan(array $data) {
        return Validator::make($data, [
            'file' => 'clamav'
        ]);
    }
}
