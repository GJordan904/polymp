import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {BytesTransform} from '../../ui/pipes/bytes-transform.pipe';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'latest-uploads',
  templateUrl: './latest-uploads.template.html',
  styleUrls: ['./latest-uploads.style.scss']
})
export class LatestUploads implements AfterViewInit {
  latestOptions = {
    show: {
      reload: true,
      fullScreen: true,
      close: false
    },
    expanded: true,
    fullScreen: false,
    load: '/api/latest-uploads',
    title: 'Latest Uploads'
  };
  rows: Array<any> = [];
  columns: Array<any> = [
    {title: 'Name', name: 'name', sort: ''},
    {title: 'Size', name: 'size', sort: '', pipe: new BytesTransform()},
    {title: 'Type', name: 'type', sort: ''},
    {title: 'Uploaded At.', name: 'created_at', sort: 'desc', pipe: new DatePipe('short')}
  ];

  page: number = 1;
  itemsPerPage: number = 5;
  maxSize: number = 5;
  numPages: number = 1;
  length: number = 0;

  config: any = {
    sorting: {columns: this.columns},
    filtering: {filterString: ''}
  };

  data: Array<any> = [];

  pagingConfigStyle: Object = {
    'background': 'none',
    'border': 'none'
  };

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.length = this.data.length;
  }

  ngAfterViewInit(): void {

  }

  changePage(page: number, data: Array<any> = this.data): void {
    let start = (page - 1) * this.itemsPerPage;
    let end = start + this.itemsPerPage;
    this.rows = this.data.splice(start, end);
  }

  changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    if (filteredData.length > 0) {
      this.columns.forEach((column: any) => {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].toString().match(config.filtering.filterString);
        });

      });

      if (!config.filtering) {
        return filteredData;
      }

      if (config.filtering.columnName) {
        return filteredData.filter((item: any) =>
          item[config.filtering.columnName].match(this.config.filtering.filterString));
      }

      let tempArray: Array<any> = [];
      filteredData.forEach((item: any) => {
        let flag = false;
        this.columns.forEach((column: any) => {
          if (item[column.name].toString().match(this.config.filtering.filterString)) {
            flag = true;
          }
        });
        if (flag) {
          tempArray.push(item);
        }
      });
      filteredData = tempArray;
    }

    return filteredData;
  }

  onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.changePage(page, sortedData);
    this.length = sortedData.length;
  }

  onLoad(latestUploads): void {
    this.data = latestUploads.latestUploads;
    this.onChangeTable(this.config);
  }
}