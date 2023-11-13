package com.openclassrooms.mddapi.payload.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseWithToken {
  private String token;
  private Long id;
  private String name;
  private String email;

  public ResponseWithToken(String accessToken, Long id, String name, String email) {
    this.token = accessToken;
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
