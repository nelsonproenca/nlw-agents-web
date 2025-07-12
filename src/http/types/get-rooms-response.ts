interface RoomsResponse {
  id: string,
  name: string,
  questionsCount: number,
  createAt: string,
}

export type GetRoomsResponse = [RoomsResponse]