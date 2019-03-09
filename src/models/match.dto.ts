interface MatchDTO{
    idMatch: string;
    jogador: UsuarioDTO;
    maquina: UsuarioDTO;
    partidaFinalizada: boolean;
    CartaUsuarioPartida: CartaUsuarioPartidaDTO[];
}