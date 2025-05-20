// =========================================================================>> Core Library
import { Body, Controller, Get, Post } from '@nestjs/common';

// =========================================================================>> Custom Library
import UserDecorator from '@app/core/decorators/user.decorator';
import User from '@models/user/users.model';
import Order from 'src/models/order/order.model';
import Product from 'src/models/product/product.model';
import Pet from '@models/pet/pet.model';
import { CreateOrderDto, CreatePetOrderDto } from './order.pos.dto'; // Add CreatePetOrderDto
import { OrderService } from './order.service';
// import { CreatePetDto } from '@app/resources/admin/pet/pet.dto';


// ======================================= >> Code Starts Here << ========================== //
@Controller()
export class OrderController {

    constructor(private readonly _service: OrderService) { };

    @Get('products')
    async getProducts(): Promise<{ data: { id: number, name: string, products: Product[] }[] }> {
        return await this._service.getProducts();
    }

    @Post('order')
    async makeOrder(@Body() body: CreateOrderDto, @UserDecorator() user: User): Promise<{ data: Order, message: string }> {
        return await this._service.makeOrder(user.id, body);
    }

    @Get('pet')
    async getPet(): Promise<{ data: { id: number, name: string, pets: Pet[] }[] }> {
        return await this._service.getPet();
    }

    @Post('order/pet')// Updated endpoint for pet orders
    async petOrder(@Body() body: CreatePetOrderDto, @UserDecorator() user: User): Promise<{ data: Order, message: string }> {
        return await this._service.petOrder(user.id, body);
    }    
}
