import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['../data-biding.component.scss', '../../../app.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  public checkedDisabled: boolean = false;
  imgSrc: string = "https://blog.ebaconline.com.br/blog/wp-content/uploads/2023/11/image6-1.png";
  imgTitle: string = "Imagem cachorro";

  constructor() { }

  ngOnInit(): void {
  }

}
