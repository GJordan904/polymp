<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class FileUpload extends FormRequest
{

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	 /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
	    $mimes = [
		    // Audio
		    'audio/mpeg', 'audio/x-m4a', 'audio/midi',
		    'audio/mp4', 'audio/ogg', 'audio/s3m',
		    'audio/silk', 'audio/vnd.dece.audio', 'audio/vnd.digital-winds',
		    'audio/vnd.dra', 'audio/vnd.dts', 'audio/vnd.dts.hd',
		    'audio/vnd.lucent.voice', 'audio/vnd.ms-playready.media.pya', 'audio/vnd.nuera.ecelp4800',
		    'audio/vnd.nuera.ecelp7470', 'audio/vnd.nuera.ecelp9600', 'audio/vnd.rip',
		    'audio/webm', 'audio/x-aac', 'audio/x-aiff',
		    'audio/x-caf', 'audio/x-flac', 'audio/x-matroska',
		    'audio/x-mpegurl', 'audio/x-ms-wax', 'audio/x-ms-wma',
		    'audio/x-pn-realaudio', 'audio/x-pn-realaudio-plugin', 'audio/x-wav',
		    'audio/xm', 'audio/mp3',
		    // Video
		    'video/3gpp','video/3gpp2','video/h261',
		    'video/h263','video/h264','video/jpeg',
		    'video/jpm','video/mj2','video/mp4',
		    'video/mpeg','video/ogg','video/quicktime',
		    'video/vnd.dece.hd','video/vnd.dece.mobile',
		    'video/vnd.dece.pd','video/vnd.dece.sd',
		    'video/vnd.dece.video','video/vnd.dvb.file',
		    'video/vnd.fvt','video/vnd.mpegurl',
		    'video/vnd.ms-playready.media.pyv','audio/x-wave',
		    'video/vnd.uvvu.mp4','video/vnd.vivo','video/webm',
		    'video/x-f4v','video/x-fli','video/x-flv',
		    'video/x-m4v','video/x-matroska','video/x-mng',
		    'video/x-ms-asf', 'video/x-ms-vob','video/x-ms-wm',
		    'video/x-ms-wmv','video/wx-ms-wmx','video/x-msvideo',
		    'video/x-sgi-movie','video/x-smv','video/x-cooltalk'
	    ];

	    return [ 'file' => 'mimetypes:'.implode(',', $mimes) ];
    }

	/**
	 * Get the error messages for the defined validation rules.
	 *
	 * @return array
	 */
	public function messages()
	{
		return [
			'file.mimetypes' => 'Invalid File Type',
		];
	}
}
