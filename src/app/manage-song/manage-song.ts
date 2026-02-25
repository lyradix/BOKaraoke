import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-manage-song',
  standalone: true,
  imports: [ CommonModule,RouterLink, HttpClientModule],
  templateUrl: './manage-song.html',
  styleUrl: './manage-song.scss',
})
export class ManageSong implements OnInit {
  selectedFile: File | null = null;
  songData: any[] = [];
  
  public apiUrl = 'http://192.168.1.164:8000';
  ngOnInit() {
    this.displaySongs();
    //ctrl+s manageSong.html to save the file and refresh the page - hot reload doesn't work for some reason
    
  }
  constructor(private http: HttpClient) {}
displaySongs() {
    this.http.get(`${this.apiUrl}/songs`).subscribe(
      (response: any) => {
        this.songData = response;
        console.log('Chansons récupérées:', this.songData);
        const songValue = this.songData.map((song: any) => song.title);
        console.log("Titres:", songValue);
      },
      (error) => {    
        console.error('Erreur lors de la récupération des chansons:', error);
      }
    );
  }



  deleteSong(songId: number) {
    this.http.delete(`${this.apiUrl}/deleteSong/${songId}`).subscribe(
      () => {
        const deletedSong = this.songData.find(song => song.id === songId);
        this.songData = this.songData.filter(song => song.id !== songId);
                alert(`La chanson ${deletedSong?.title} a bien été supprimée`);
                //refresh the song list after deletion
                this.displaySongs();
        console.log(`La chanson ${deletedSong?.title} a bien été supprimée`);
      },
      (error) => {
        console.error('Error deleting song:', error);
      }
    );
  }



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
      this.http.post(`${this.apiUrl}/importCSV`, formData).subscribe(
        (response) => {
          console.log('Fichier importé avec succès:', response);
          this.displaySongs();
        },
        (error) => {
          console.error('Erreur lors de l\'importation du fichier:', error);
        }
      );
    } else {
      console.warn('Aucun fichier sélectionné.');
    }
  }

  
}