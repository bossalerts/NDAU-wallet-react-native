// Objective-C API for talking to github.com/oneiro-ndev/ndaumath/pkg/keyaddr Go package.
//   gobind -lang=objc github.com/oneiro-ndev/ndaumath/pkg/keyaddr
//
// File is generated by gobind. Do not edit.

#ifndef __Keyaddr_H__
#define __Keyaddr_H__

@import Foundation;
#include "Universe.objc.h"

@class KeyaddrAddress;
@class KeyaddrKey;
@class KeyaddrSignature;

/**
 * Address is an Ndau Address, derived from a public key.
 */
@interface KeyaddrAddress : NSObject <goSeqRefInterface>
{
}
@property(strong, readonly) id _ref;

- (instancetype)initWithRef:(id)ref;
- (instancetype)init;
- (NSString *)address;
- (void)setAddress:(NSString *)v;
@end

/**
 * Key is the object that contains a public or private key
 */
@interface KeyaddrKey : NSObject <goSeqRefInterface>
{
}
@property(strong, readonly) id _ref;

- (instancetype)initWithRef:(id)ref;
/**
 * NewKey takes a seed (an array of bytes encoded as a base64 string) and creates a private master
key from it. The key is returned as a string representation of the key;
it is converted to and from the internal representation by its member functions.
 */
- (instancetype)init:(NSString *)seedstr;
- (NSString *)key;
- (void)setKey:(NSString *)v;
/**
 * Child returns the n'th child of the given extended key. The child is of the
same type (public or private) as the parent. Although n is typed as a signed
integer, this is due to the limitations of gomobile; n may not be negative.
It is an error if the given key is a hardened key.
 */
- (KeyaddrKey *)child:(int32_t)n error:(NSError **)error;
/**
 * HardenedChild returns the n'th hardened child of the given extended key.
The parent key must be a private key.
A HardenedChild is guaranteed to have been derived from a private key.
Although n is typed as a signed integer, this is due to the limitations of gomobile;
n may not be negative.
It is an error if the given key is already a hardened key.
 */
- (KeyaddrKey *)hardenedChild:(int32_t)n error:(NSError **)error;
/**
 * IsPrivate tests if a given key is a private key; will return non-nil
error if the key is invalid.
 */
- (BOOL)isPrivate:(BOOL *)ret0_ error:(NSError **)error;
/**
 * NdauAddress returns the ndau address associated with the given key.
Key can be either public or private; if it is private it will be
converted to a public key first.
 */
- (KeyaddrAddress *)ndauAddress:(NSString *)chainid error:(NSError **)error;
/**
 * Sign uses the given key to sign a message; the message must be the
standard base64 encoding of the bytes of the message.
It returns a signature object.
The key must be a private key.
 */
- (KeyaddrSignature *)sign:(NSString *)msgstr error:(NSError **)error;
/**
 * ToPublic returns an extended public key from any other extended key.
If the key is an extended private key, it generates the matching public key.
If the key is already a public key, it just returns itself.
It is an error if the key is hardened.
 */
- (KeyaddrKey *)toPublic:(NSError **)error;
@end

/**
 * Signature is the result of signing a block of data with a key.
 */
@interface KeyaddrSignature : NSObject <goSeqRefInterface>
{
}
@property(strong, readonly) id _ref;

- (instancetype)initWithRef:(id)ref;
- (instancetype)init;
- (NSString *)signature;
- (void)setSignature:(NSString *)v;
@end

/**
 * FromString acts like a constructor so that the wallet can build a Key object
from a string representation of it.
 */
FOUNDATION_EXPORT KeyaddrKey *KeyaddrFromString(NSString *s, NSError **error);

/**
 * NewKey takes a seed (an array of bytes encoded as a base64 string) and creates a private master
key from it. The key is returned as a string representation of the key;
it is converted to and from the internal representation by its member functions.
 */
FOUNDATION_EXPORT KeyaddrKey *KeyaddrNewKey(NSString *seedstr, NSError **error);

/**
 * WordsFromBytes takes an array of bytes and converts it to a space-separated list of
words that act as a mnemonic. A 16-byte input array will generate a list of 12 words.
 */
FOUNDATION_EXPORT NSString *KeyaddrWordsFromBytes(NSString *lang, NSString *data, NSError **error);

/**
 * WordsFromPrefix accepts a language and a prefix string and returns a sorted, space-separated list
of words that match the given prefix. max can be used to limit the size of the returned list
(if max is 0 then all matches are returned, which could be up to 2K if the prefix is empty).
 */
FOUNDATION_EXPORT NSString *KeyaddrWordsFromPrefix(NSString *lang, NSString *prefix, long max);

/**
 * WordsToBytes takes a space-separated list of words and generates the set of bytes
from which it was generated (or an error). The bytes are encoded as a base64 string
using standard base64 encoding, as defined in RFC 4648.
 */
FOUNDATION_EXPORT NSString *KeyaddrWordsToBytes(NSString *lang, NSString *w, NSError **error);

#endif
