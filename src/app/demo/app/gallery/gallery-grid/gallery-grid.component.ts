import { Component, OnInit } from '@angular/core';
import { Image, ModalGalleryService, ModalGalleryRef, ModalGalleryConfig, ModalLibConfig } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent implements OnInit {
  imageIndex = 0;
  images: Image[] = [
    new Image(0, {
      img: 'assets/images/gallery-grid/img-grd-gal-1.jpg',
      extUrl: 'http://www.google.com'
    }),
    new Image(1, {
      img: 'assets/images/gallery-grid/img-grd-gal-2.jpg',
      description: 'Description 2'
    }),
    new Image(2, {
      img: 'assets/images/gallery-grid/img-grd-gal-3.jpg',
      description: 'Description 3'
    }),
    new Image(3, {
      img: 'assets/images/gallery-grid/img-grd-gal-4.jpg',
      description: 'Description 4',
      extUrl: 'http://www.google.com'
    }),
    new Image(4, {
      img: 'assets/images/gallery-grid/img-grd-gal-5.jpg',
      description: 'Description 5',
      extUrl: 'http://www.google.com'
    }),
    new Image(5, {
      img: 'assets/images/gallery-grid/img-grd-gal-6.jpg',
      description: 'Description 6',
      extUrl: 'http://www.google.com'
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
