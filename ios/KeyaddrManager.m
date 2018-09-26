//
//  KeyaddrManager.m
//  ndauwalletrn
//
//  Created by Kristofer Pelchat on 7/8/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "KeyaddrManager.h"
#import <React/RCTLog.h>
#import <Keyaddr/Keyaddr.h>

@implementation KeyaddrManager

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(keyaddrWordsFromBytes,lang:(NSString*)lang bytes:(NSString*)bytes keyaddrWordsFromBytesWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject )
{
  RCTLogInfo(@"keyaddrWordsFromBytes call with %@ at %@", lang, bytes);
  NSError *__autoreleasing *error = NULL;

  NSString *words = KeyaddrWordsFromBytes(lang, bytes, error);
  if (error) {
    reject(@"no_events", @"Issue calling keyaddrWordsFromBytes", *error);
  } else {
    resolve(words);
  }
}

RCT_REMAP_METHOD(keyaddrWordsToBytes,lang:(NSString*)lang words:(NSString*)words keyaddrWordsToBytesWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject )
{
  RCTLogInfo(@"keyaddrWordsToBytes call with lang:%@ and words:%@", lang, words);
  NSError *__autoreleasing *error = NULL;

  NSString *bytes = KeyaddrWordsToBytes(lang, words, error);
  if (error) {
    reject(@"no_events", @"Issue calling keyaddrWordsToBytes", *error);
  } else {
    RCTLogInfo(@"keyaddrWordsToBytes converted words above to:%@", bytes);
    resolve(bytes);
  }
}

RCT_REMAP_METHOD(newKey,seed:(NSString*)seed resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject )
{
  RCTLogInfo(@"NewKey call on %@", seed);
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrNewKey(seed, error);

  if (error) {
    reject(@"no_events", @"Issue calling NewKey", *error);
  } else {
    resolve([keyAddrKey key]);
  }
}

RCT_REMAP_METHOD(child,key:(NSString*)key index:(NSNumber*)index resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject )
{
  RCTLogInfo(@"NewKey call on %@", key);
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrFromString(key, error);
  KeyaddrKey *privateKey = [keyAddrKey child:*index error:error];

  if (error) {
    reject(@"no_events", @"Issue calling child", *error);
  } else {
    resolve([privateKey key]);
  }
}

RCT_REMAP_METHOD(toPublic,key:(NSString*)key resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject )
{
  RCTLogInfo(@"NewKey call on %@", key);
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrFromString(key, error);
  KeyaddrKey *publicKey = [keyAddrKey toPublic:error];
  
  if (error) {
    reject(@"no_events", @"Issue calling toPublic", *error);
  } else {
    resolve([publicKey key]);
  }
}

RCT_REMAP_METHOD(ndauAddress,key:(NSString*)key chainId:(NSString*)chainId  resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject )
{
  RCTLogInfo(@"NewKey call on %@", key);
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrFromString(key, error);
  KeyaddrAddress *address = [keyAddrKey ndauAddress:chainId error:error];
  
  if (error) {
    reject(@"no_events", @"Issue calling ndauAddress", *error);
  } else {
    resolve([address address]);
  }
}

RCT_REMAP_METHOD(CreatePublicAddress,seed:(NSString*)seed count:(NSInteger)count chainId:(NSString*)chainId neuterithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject )
{
  RCTLogInfo(@"CreatePublicAddress call on %@", seed);
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = [[KeyaddrKey alloc] init:(seed)];
  NSMutableArray *array = [NSMutableArray arrayWithCapacity:count];

  for (int i = 1; i <= count; i++) {
    KeyaddrKey *publicKey = [keyAddrKey child:i error:error];
    KeyaddrAddress *address = [publicKey ndauAddress:chainId error:error];
    NSString *addressString = [address address];
    [array addObject:addressString];
    RCTLogInfo(@"ndau addressString is:%@",addressString);
  }

  RCTLogInfo(@"array of addresses is:%@",array);

  if (error) {
    reject(@"no_events", @"Issue calling CreatePublicAddress", *error);
  } else {
    resolve(array);
  }
}

@end
