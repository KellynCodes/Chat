import { UserDto } from "../../../data/Dto/user/user.dto";

export interface LoginSuccessDto {
  accessToken: string | null;
  refreshToken: string | null;
  expiryTimeStamp: number;
  user: UserDto | undefined;
}