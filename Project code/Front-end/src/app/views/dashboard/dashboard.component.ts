import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/Models/client.model';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article.model';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private chartsData: DashboardChartsData,
    private clientSer: ClientService,
    private ServiceA : ArticleService
  ) {}
  clients: Client[] = [];
  Articles: Article[]=[]
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month'),
  });
  reviewClients() {
    this.clientSer.getClients().subscribe({
      next: (data) => {
        this.clients = data;
        //console.log(data);
      },
      error: (e) => console.log(e),
    });
  }
  reviewArticles(){
    console.log("yeah nigga!")
    this.ServiceA.getArticles().subscribe({
      next: (data)=>{
        this.Articles=data;
       // console.log(data);
      },
      error:(e)=>console.log(e)
    });
  }
  ngOnInit(): void {
    this.initCharts();
    this.reviewClients()
    this.reviewArticles()
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
