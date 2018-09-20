import { Component } from '@angular/core';
import { FavouriteChangeEventArgs } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    title: "Title",
    isActive: true
  }

  tweet = {
    body: "Here is the body of a tweet...",
    isLiked: false,
    likesCount: 10
  }

  onFavouriteChanged(eventArgs: FavouriteChangeEventArgs) {
    console.log("Favourite changed: ", eventArgs);
  }

}

