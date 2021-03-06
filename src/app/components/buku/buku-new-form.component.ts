import { Component, OnInit } from '@angular/core';
import { Buku } from 'src/app/model/buku';
import { BukuService } from 'src/app/service/buku/buku.service';

@Component({
  selector: 'app-buku-new-form',
  templateUrl: './buku-new-form.component.html',
  styleUrls: ['./buku-new-form.component.css']
})
export class BukuNewFormComponent implements OnInit {

  constructor(
    private bukuService: BukuService
  ) { }

  ngOnInit(): void {
  }
  save(buku: Buku) : void {
    if (buku) {
      //save buku ke webservice
      console.log("bukuForm", buku);
      alert('Saving buku..');
      this.bukuService.addBuku(buku).subscribe();
    }

  }

}
