import { ApiProperty } from "@nestjs/swagger";
export class CreateAdminDto {
    
    @ApiProperty({
        example:'heiddy '})
        name: string;
       
    @ApiProperty ({example:'hp@gmail.com'})
    email:string;

    @ApiProperty({example:'saAdmin'})
    password:string;
 

}
