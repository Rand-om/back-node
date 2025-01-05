export default class PostDto {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public created_at: Date
    ) {}
  }
  