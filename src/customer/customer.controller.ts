import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

    @Get()
    getCustomers(){
        return this.customerService.getAllCustomers();
    }

    @Post()
    addCustomer(@Body() createCustomerDto: CreateCustomerDto){
        return this.customerService.addCustomer(createCustomerDto);
    }

    @Put(':id')
    updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto){
        return this.customerService.UpdateCustomer(Number(id),updateCustomerDto);
    }
}
