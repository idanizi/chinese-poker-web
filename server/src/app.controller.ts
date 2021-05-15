import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Hand } from 'pokersolver';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/hand/solve')
  solve(@Body('cards') cards: string[]): any {
    return Hand.solve(cards);
  }

  @Post('/hand/compare')
  compare(@Body('hands') hands: string[][]): any {
    const players = hands.map(cards => Hand.solve(cards));
    const [winner, ] = Hand.winners(players)
    const winner_index = players.findIndex(p => p === winner);
    return { winner: {index: winner_index, name: winner?.name}, hands: players.map(p => ({name: p.name})) }
  }
}
