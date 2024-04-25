import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slug',
  templateUrl: './slug.component.html',
  styleUrl: './slug.component.scss'
})
export class SlugComponent {
  protected slug: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ){
    this.slug = this.activatedRoute.snapshot.params['slug']
  }
}
