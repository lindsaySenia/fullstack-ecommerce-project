package com.lindsaySenia.springbootecommerce.dto;

import com.lindsaySenia.springbootecommerce.entity.Address;
import com.lindsaySenia.springbootecommerce.entity.Customer;
import com.lindsaySenia.springbootecommerce.entity.Order;
import com.lindsaySenia.springbootecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
