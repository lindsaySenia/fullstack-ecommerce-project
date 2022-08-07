package com.lindsaySenia.springbootecommerce.dao;

import com.lindsaySenia.springbootecommerce.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface StateRepository extends JpaRepository<State, Integer> {

    // retrieve states for a given country code
    // example: api/states/search/findByCountryCode?code=US
    List<State> findByCountryCode(@Param("code") String code);
}
