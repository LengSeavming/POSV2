// ===========================================================================>> Core Library
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
} from "@nestjs/common";

// ===========================================================================>> Costom Library
import UserDecorator from "@app/core/decorators/user.decorator";
import { ProductsTypeExistsPipe } from "@app/core/pipes/product.pipe";
import User from "@models/user/users.model";

import { PetService } from "./pet.service";
import Pet from "@models/pet/pet.model";
import { CreatePetDto, UpdatePetDto } from "./pet.dto";

@Controller()
export class PetController {
  constructor(private _service: PetService) {}

  @Get("setup")
  async setup() {
    return await this._service.setup();
  }

  @Get()
  async listing(
    @Query("page_size") page_size?: number,
    @Query("page") page?: number,
    @Query("key") key?: string,
    @Query("type_id") type_id?: number,
    @Query("creator_id") creator_id?: number,
    @Query("startDate") startDate?: string,
    @Query("endDate") endDate?: string
  ) {
    if (!page_size) {
      page_size = 10;
    }
    if (!page) {
      page = 1;
    }

    return await this._service.listing(
      page_size,
      page,
      key,
      type_id,
      creator_id,
      startDate,
      endDate
    );
  }

  @Get("/:id")
  async view(@Param("id", ParseIntPipe) id: number) {
    return await this._service.view(id);
  }

  @Post("animal")
  @UsePipes(ProductsTypeExistsPipe)
  async create(
    @Body() body: CreatePetDto,
    @UserDecorator() auth: User
  ): Promise<{ data: Pet; message: string }> {
    return await this._service.create(body, auth.id);
  }

  @Put(":id")
  @UsePipes(ProductsTypeExistsPipe)
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: UpdatePetDto
  ) {
    return this._service.update(body, id);
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<{ message: string }> {
    return await this._service.delete(id);
  }
}
