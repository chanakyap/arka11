import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
})
export class OurServicesComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Our Services',
    description: ''
  };

  // tslint:disable-next-line:max-line-length
  services: any[] = [
    {
      title: 'EPC & Development',
      desc: 'Arka11 is a comprehensive EPC solutions provider. It offers the expertise as well as the tools to commission and execute solar projects of any proportion on a turnkey basis from conceptualization to completion while catering to the custom requirements of clients. We offer solutions for residential, commercial, industrial and utility-scale projects. State of the art machinery to install & commission the projects. Use of high quality & reliable modules and Balance of Systems.'
    },
    {
      title: 'Open Access',
      desc: 'Open Access model is for the industrial and commercial clients who want electricity directly from the generator at an optimum price. The customer pays for the electricity supplied to it directly from the generator under a long-term Power Purchase Agreement (PPA). The entire project is developed, constructed, and financed by Arka11. Only in the CAPEX model as per required regulations, the power off-taker is also required to invest in equity. The power is generated and sold to the off-taker under open access route at a pre-determined tariff. Clients pay for only the units they have consumed, ensuring savings from Day 1 of the operations.'
    },
    {
      title: 'Operations & Maintenance',
      desc: 'O&M services includes professional financial and physical asset management solutions, revenue assurance, ongoing maintenance and repairs, and complete operational solutions for PV assets across India. O&M services are designed to maximize the lifetime value of your solar power plant assets. Arka11 proactively monitors and manages solar plants to minimize downtime and increase site availability, resulting in maximum energy production, revenues, and profitability. Arka11 team operates and maintains solar power plants, offers monthly reports on generation and activities. It also provides project commissioning expertise along with developing a mechanism to retrieve and manage generation data.'
    },
    {
      title: 'Project Management',
      desc: 'Project Management ensures the system delivery in the best desired timeline, quality, and budget. This involves attention to details and coordination between different teams in terms of what steps to take next in the process. Project management tackles the methodology required for planning, scheduling, and managing resources including manpower and materials. Arka11 is qualified to prepare a plan that meets the requirements as specified in the contract with the PV system owners. Arka11 fully understand\'s the technical aspects of PV projects, which include procurement, planning, scheduling, engineering, integration, and commissioning.'
    },
    {
      title: '',
      desc: ''
    },
    {
      title: '',
      desc: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
