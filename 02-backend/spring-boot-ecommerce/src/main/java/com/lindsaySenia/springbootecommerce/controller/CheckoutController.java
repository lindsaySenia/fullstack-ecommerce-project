package com.lindsaySenia.springbootecommerce.controller;

import com.lindsaySenia.springbootecommerce.dto.Purchase;
import com.lindsaySenia.springbootecommerce.dto.PurchaseResponse;
import com.lindsaySenia.springbootecommerce.service.CheckoutService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    // inject checkoutService into the constructor
    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        return purchaseResponse;
    }


}
