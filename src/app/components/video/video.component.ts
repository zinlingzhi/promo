import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{
  video_id: any = null;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.video_id = params.get('id')
    })
  }
  goBack() {
    // Check the token if the user still logged in.
    // If user don't has token, go to Login back, other wise go to Gallery Page
    this.router.navigateByUrl('/gallery')
  }
}
