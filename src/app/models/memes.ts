export interface IMemeInfo {
  success: boolean
  data: IData
}

export interface IData {
  memes: IMeme[]
}

export interface IMeme {
  id: string
  name: string
  url: string
  width: number
  height: number
  box_count: number
  captions: number
}
