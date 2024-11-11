// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-players',
//   standalone: true,
//   imports: [],
//   templateUrl: './players.component.html',
//   styleUrl: './players.component.css'
// })
// export class PlayersComponent {
//
// }
//               codigo a implementar   --------------------------------------------------------------


import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service'; // Importar el servicio correctamente

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any[] = [];
  page: number = 1;
  limit: number = 10;
  filters = {
    name: '',
    club: '',
    position: ''
  };

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers(this.page, this.limit, this.filters).subscribe({
      next: (data) => {
        this.players = data;
      },
      error: (err) => {
        console.error('Error al obtener jugadores:', err);
      }
    });
  }
}

