export type UserGender = '남성' | '여성';

export interface MyProfileResponse {
  email: string;
  nickname: string;
  gender: UserGender;
  profileImage?: string;
}
