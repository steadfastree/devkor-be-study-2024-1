import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsNumber()
  postId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  parentCommentId: number;

  @ApiProperty()
  @IsString()
  content: string;
}
