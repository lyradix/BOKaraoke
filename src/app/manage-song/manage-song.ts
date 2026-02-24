import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-manage-song',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './manage-song.html',
  styleUrl: './manage-song.scss',
})
export class ManageSong {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

 onFileSelected(event: any) {
  const file: File = event.target.files[0];
  this.selectedFile = file;
  console.log("File selected:", file);
  }
  onSubmit(event: any) {
    event.preventDefault();   
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.http.post('http://127.0.0.1:8000/importCSV', formData).subscribe(
        (response) => {
          console.log('Fichier importé avec succès:', response);
        },
        (error) => {
          console.error('Erreur lors de l\'importation du fichier:', error);
        }
      );
    } else {
      
      console.warn('Aucun fichier sélectionné.');
    }
  }


songData: any[] = [];

  ngOnInit() {
    this.displaySongs();
  }

  displaySongs() {
    this.http.get('http://127.0.0.1:8000/songs').subscribe(
      (response: any) => {
        this.songData = response;
        console.log('Chansons récupérées:', this.songData);
            const songValue = this.songData.map((song: any) => song.title);
            console.log("Titres:", songValue);
                    // console.error('Erreur lors de la récupération des chansons:', Error);
      },
      (error) => {

      }
    );

  }

}
