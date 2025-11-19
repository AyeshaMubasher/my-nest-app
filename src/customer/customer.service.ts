import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from './Interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];
    private customerId: number = 0;

    getAllCustomers(): Customer[]{
        return this.customers;
    }
 
    addCustomer(createCustomerDto: CreateCustomerDto): Customer
    {
        this.customerId++;

        const newCustomer: Customer = {
            id: this.customerId,
            ...createCustomerDto,
        };

        this.customers.push(newCustomer);

        return newCustomer;
    }

    UpdateCustomer(id: number, updateCustomerDto: UpdateCustomerDto): Customer
    {
        const index = this.customers.findIndex((c) => c.id === id);

        if(index === -1)
            throw new NotFoundException("Customer Not Found");

        this.customers[index] = {id, ...updateCustomerDto};
        
        return this.customers[index];
    }
}
