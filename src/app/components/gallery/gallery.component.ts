import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Video } from 'src/app/models/video.interface';
interface GalleryItem {
  video_id: number;
  image: string;
  duration: string;
  description: string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  videos: Video[] = []
  galleryItems: GalleryItem[] = []
  isLoading = true
  constructor(private dataService: DataService, private router: Router) {
  }
  ngOnInit(): void {
    this.getData()
  }
  getData(): void {
    this.dataService.fetchData().subscribe((videos: any) => {
      this.videos = videos;
      this.updateGalleryItems()
      this.isLoading = false;
    })
  }
  updateGalleryItems() {
    const videos = this.videos
    this.galleryItems = []
    for (let i = 0; i < videos.length; i++) {
      const images = videos[i].images
      let imageUrl: string = '';
      if (images) {
        for (let j = 0; j < images.length; j++) {
          const image = images[j];
          if(image.type === 'thumbnail') {
            imageUrl = image.url
          }
        }
        let galleryItem: GalleryItem = {
          video_id : 0,
          image: '',
          duration: '',
          description: ''
        };
        galleryItem.video_id = videos[i].id;
        galleryItem.image = imageUrl
        galleryItem.duration = videos[i].duration;
        galleryItem.description = videos[i].description;
        this.galleryItems.push(galleryItem)
      }
    }
  }
}
