package com.simpleuuid

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import java.util.UUID

@ReactModule(name = SimpleUuidModule.NAME)
class SimpleUuidModule(reactContext: ReactApplicationContext) :
  NativeSimpleUuidSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun v4(): String {
    return UUID.randomUUID().toString();
  }

  companion object {
    const val NAME = "SimpleUuid"
  }
}
