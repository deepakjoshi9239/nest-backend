import { Controller,Get,Post, Patch,Req,Delete,Param, Body, ParseIntPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";
@Controller('/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUser(){
        // return {name: "John Doe", age: 30, email:"jhon@gmail.com"};
        return this.userService.get();
    }


    @Post()
    store(@Body() body: any){
        return this.userService.create(body);
    }

    @Patch('/:userId')
        update(@Body() updateUserDto: UpdateUserDto, @Param('userId') userId: string) {
        return this.userService.update(updateUserDto, +userId); // Convert string to number
    }


    @Get('/:userId')
    getUsers(@Param('userId', ParseIntPipe) userId: number){
        return this.userService.show(userId);
    }

    @Delete('/:userId')
    deleteUser(@Param() params: { userId: number}){
        return this.userService.delete(params.userId);
    }
}