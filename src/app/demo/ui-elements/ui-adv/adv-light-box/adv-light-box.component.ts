import { Component, OnInit } from '@angular/core';
import { Image, ModalGalleryService, ModalGalleryRef, ModalGalleryConfig, ModalLibConfig } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-adv-light-box',
  templateUrl: './adv-light-box.component.html',
  styleUrls: ['./adv-light-box.component.scss']
})
export class AdvLightBoxComponent implements OnInit {
  imageIndex = 0;
  images: Image[] = [
    new Image(0, {
      img: 'assets/images/light-box/sl3.jpg',
      extUrl: 'http://www.google.com'
    }),
    new Image(1, {
      img: 'assets/images/light-box/sl4.jpg',
      description: 'Description 2'
    })
  ];

  imagesRect: Image[] = [
    new Image(0, {
      img: 'assets/images/light-box/sl1.jpg',
      description: 'Description 1'
    }),
    new Image(0, {
      img: 'assets/images/light-box/sl2.jpg',
      description: 'Description 1'
    }),
    new Image(0, {
      img: 'assets/images/light-box/sl5.jpg',
      description: 'Description 1'
    }),
    new Image(0, {
      img: 'assets/images/light-box/sl6.jpg',
      description: 'Description 1'
    })
  ];

  constructor(private modalGalleryService: ModalGalleryService) {}

  ngOnInit() {}

  openModal(id: number, imagesArrayToUse: Image[], imageIndex: number, libConfig?: ModalLibConfig): void {
    if (imagesArrayToUse.length === 0) {
      console.error('Cannot open modal-gallery because images array cannot be empty');
      return;
    }
    if (imageIndex > imagesArrayToUse.length - 1) {
      console.error('Cannot open modal-gallery because imageIndex must be valid');
      return;
    }
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow,
      libConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }
}
