import { NativeModules } from 'react-native'
import ValidationKeyMaster from '../ValidationKeyMaster'
import MockHelper from '../MockHelper'
import sinon from 'sinon'

MockHelper.mockServiceDiscovery()
MockHelper.mockAccountsAPI()
MockHelper.mockAccountAPI()
MockHelper.mockEaiRate()
MockHelper.mockMarketPriceAPI()

NativeModules.KeyaddrManager = {
  keyaddrWordsToBytes: jest.fn(),
  newKey: jest.fn(),
  child: jest.fn(),
  hardenedChild: jest.fn(),
  ndauAddress: jest.fn(),
  deriveFrom: jest.fn(),
  toPublic: jest.fn()
}

const deriveFrom = sinon.stub(NativeModules.KeyaddrManager, 'deriveFrom')
const toPublic = sinon.stub(NativeModules.KeyaddrManager, 'toPublic')

deriveFrom
  .withArgs('*suppressed*', `/44'/20036'/100`, `/44'/20036'/100/10000`)
  .returns('root')

const testWallet7MP4FVStart = {
  walletId: 'Wallet 1',
  accountCreationKeyHash: '308c3bc3',
  accounts: {
    ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze: {
      address: 'ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze',
      addressData: {
        balance: 338699,
        validationKeys: [
          'npuba4jaftckeeba47fzizq3gs2vnnawj329tkiuh4xi2u8gurh3y2vu8jgbvndeh9sieut3eaaaaaaxrtumjidjk2y6fcdsb6rdy5gc9yfptsexhan92ch373d52z7y8izmz8j7rddg',
          'npuba8jadtbbeac7cpavqfv555pi4wbdznse8ta5g4xdz6ehc35fmxaei7zc9j9sgxjcx893wh23',
          'npuba8jadtbbec9vnei6qnxcczpsw6wjbmejt2scwqbaa9axxdxf3znry482gaz5r9u6mbmz3uz4'
        ],
        validationScript: 'oAAgiA==',
        rewardsTarget: null,
        incomingRewardsFrom: [
          'ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4'
        ],
        delegationNode: 'ndam75fnjn7cdues7ivi7ccfq8f534quieaccqibrvuzhqxa',
        lock: {
          noticePeriod: '3m',
          unlocksOn: '2019-09-08T12:48:04Z',
          bonus: 10000000000
        },
        lastEAIUpdate: '2019-06-11T00:53:09Z',
        lastWAAUpdate: '2019-06-11T00:53:09Z',
        weightedAverageAge: '2dt13h39m19s958562us',
        sequence: 39,
        stake_rules: null,
        costakers: {},
        holds: null,
        recourseSettings: { period: 't1h', changes_at: null, next: null },
        currencySeatDate: null,
        parent: null,
        progenitor: null
      },
      ownershipKey: 'ddb5fb2c',
      validationKeys: []
    },
    ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4: {
      address: 'ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4',
      addressData: {
        balance: 95950000,
        validationKeys: [
          'npuba4jaftckeebijwfxqwdyk3nt9bjxek7dq2mx2kjfgpbkq7dmrpa3rep5bsp3362idhqsyaaaaabaff879kt39fvjd7nntqutczzu2hm6u7vr73uutw3gqjxeqvgyjzf2es8ry7fi',
          'npuba8jadtbbeckdfcbf2jy9eq7xmxfyehvxajxyxeuusjcjasu4aqz9iyvtz8txapsisybygqpn',
          'npuba8jadtbbec9vnei6qnxcczpsw6wjbmejt2scwqbaa9axxdxf3znry482gaz5r9u6mbmz3uz4'
        ],
        validationScript: 'oAAgiA==',
        rewardsTarget: 'ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze',
        incomingRewardsFrom: null,
        delegationNode: 'ndam75fnjn7cdues7ivi7ccfq8f534quieaccqibrvuzhqxa',
        lock: {
          noticePeriod: '1y25d',
          unlocksOn: '2019-06-26T00:00:00Z',
          bonus: 30000000000
        },
        lastEAIUpdate: '2019-06-11T00:53:09Z',
        lastWAAUpdate: '2018-06-01T00:00:00Z',
        weightedAverageAge: '1y10dt14h27m19s877005us',
        sequence: 74,
        stake_rules: null,
        costakers: {},
        holds: null,
        recourseSettings: { period: 't1h', changes_at: null, next: null },
        currencySeatDate: null,
        parent: null,
        progenitor: null
      },
      ownershipKey: 'f5b17631',
      validationKeys: []
    },
    ndafxgxquvuzrmrungp3kgn5jnsgptxd7th67ymxxwsscech: {
      address: 'ndafxgxquvuzrmrungp3kgn5jnsgptxd7th67ymxxwsscech',
      addressData: {
        balance: 1000000,
        validationKeys: null,
        validationScript: null,
        rewardsTarget: null,
        incomingRewardsFrom: null,
        delegationNode: null,
        lock: null,
        lastEAIUpdate: '2019-05-30T18:13:35Z',
        lastWAAUpdate: '2019-05-30T18:13:35Z',
        weightedAverageAge: '11dt20h13m44s358385us',
        sequence: 0,
        stake_rules: null,
        costakers: {},
        holds: null,
        recourseSettings: { period: 't1h', changes_at: null, next: null },
        currencySeatDate: null,
        parent: null,
        progenitor: null
      },
      ownershipKey: '358fffef',
      validationKeys: []
    },
    ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3: {
      address: 'ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3',
      addressData: {
        balance: 10875547,
        validationKeys: [
          'npuba4jaftckeeb4v85jps39h79f8kfw8tnje2mx2b7496e99s5e3dk5mq8fefsfffsfzti4gaaaaaa3k3zqrfz6pe9gde3pa5yxjc9dz6aet25zpuyryy986fybetmgn9u224i4jp5t'
        ],
        validationScript: null,
        rewardsTarget: null,
        incomingRewardsFrom: null,
        delegationNode: 'ndahnsxr8zh7r6u685ka865wz77wb78xcn45rgskpeyiwuza',
        lock: {
          noticePeriod: '3m',
          unlocksOn: '2019-08-19T20:09:01Z',
          bonus: 10000000000
        },
        lastEAIUpdate: '2019-06-11T00:53:06Z',
        lastWAAUpdate: '2019-05-21T13:19:45Z',
        weightedAverageAge: '21dt1h7m34s594652us',
        sequence: 7,
        stake_rules: null,
        costakers: {},
        holds: null,
        recourseSettings: { period: 't1h', changes_at: null, next: null },
        currencySeatDate: null,
        parent: null,
        progenitor: null
      },
      ownershipKey: 'f2fb495a',
      validationKeys: []
    }
  },
  keys: {
    '308c3bc3': {
      publicKey:
        'npuba4jaftckeebbp4w4zhfx276c6c7sg36q48ebtaj9wr93qu5r9jyfv44z2gw649id7axp8aaaabufyh7wbsk8zfc2khpmk8s5xcvfexc8j4d3h8tj7w65f3kx9w3ee3jr68zj8snb',
      privateKey: '*suppressed*',
      path: "/44'/20036'/100",
      derivedFromRoot: 'yes'
    },
    ddb5fb2c: {
      publicKey:
        'npuba4jaftckeebgxwhzw2mir4czjkuwyp7g9vpsh4bx9t5dym87h8gbkbqinmjqdjaebgfnuaaaaabciwbqfusup9mpmwwi95p9diatshqegkq4j8jwyd7qayid9tvy64uig6he34ei',
      privateKey: '*suppressed*',
      path: "/44'/20036'/100/2",
      derivedFromRoot: 'yes'
    },
    f5b17631: {
      publicKey:
        'npuba4jaftckeebetgbepdnd9i99mwmtj8cjphfwnec3z2shy6dyu6t2mt8zkxg86i2ebgfnuaaaaaax7xqpbtrwsj896d6izqqw4nbzw3gde4ygc58rfzzwcxxrxrgvdhcrf7izg49q',
      privateKey: '*suppressed*',
      path: "/44'/20036'/100/1",
      derivedFromRoot: 'yes'
    },
    '358fffef': {
      publicKey:
        'npuba4jaftckeebd3kvpv4ngpqi6ne5ti9a47ryu4kvqb7qan84y7wut5n34bue7g72ebgfnuaaaaacbd87ke2nj35yyd532fzhcjg3mbfywdyef8ncxjbtjesshgt2qa7jy38nu9hi7',
      privateKey: '*suppressed*',
      path: "/44'/20036'/100/4",
      derivedFromRoot: 'yes'
    },
    f2fb495a: {
      publicKey:
        'npuba4jaftckeeb6kcdj4hngiv8b4is4z2h3hwzypq9etkvnpjn8483uq43i99rsf82ebgfnuaaaaabs4jwv9k8dnth46qyzjsmw6cfqgy6ipvqb4hky8gwtg9tpe22yijbdg4sw4i5u',
      privateKey: '*suppressed*',
      path: "/44'/20036'/100/3",
      derivedFromRoot: 'yes'
    }
  }
}

test('addValidationKey test for no validationKey', async () => {
  const wallet = JSON.parse(JSON.stringify(testWallet7MP4FVStart))
  const account =
    wallet.accounts['ndafxgxquvuzrmrungp3kgn5jnsgptxd7th67ymxxwsscech']
  const keysLength = Object.keys(wallet.keys).length

  expect(account.validationKeys.length).toBe(0)

  deriveFrom
    .withArgs('root', `/44'/20036'/100/10000/4`, `/44'/20036'/100/10000/4/1`)
    .returns('validation1')
  toPublic.withArgs('validation1').returns('pubVal1')

  await ValidationKeyMaster.addValidationKey(wallet, account)

  expect(account.validationKeys.length).toBe(1)
  expect(Object.keys(wallet.keys).length).toBe(keysLength + 1)
  expect(wallet.keys['c9a80d6d'].privateKey).toBe('validation1')
  expect(wallet.keys['c9a80d6d'].publicKey).toBe('pubVal1')
})

test('addValidationKey test an account which will be recovered', async () => {
  const wallet = JSON.parse(JSON.stringify(testWallet7MP4FVStart))
  const account =
    wallet.accounts['ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3']
  const keysLength = Object.keys(wallet.keys).length

  expect(account.validationKeys.length).toBe(0)

  deriveFrom
    .withArgs('root', `/44'/20036'/100/10000/3`, `/44'/20036'/100/10000/3/1`)
    .returns('validation2')
  toPublic.withArgs('validation2').returns('pubVal2')

  await ValidationKeyMaster.addValidationKey(wallet, account)

  expect(account.validationKeys.length).toBe(1)
  expect(Object.keys(wallet.keys).length).toBe(keysLength + 1)
  expect(wallet.keys['8860ffd9'].privateKey).toBe('validation2')
  expect(wallet.keys['8860ffd9'].publicKey).toBe('pubVal2')
})

test('recoverValidationKeys with a genesis account', async () => {
  const wallet = JSON.parse(JSON.stringify(testWallet7MP4FVStart))
  const account =
    wallet.accounts['ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze']

  for (let i = 0; i < 10; i++) {
    deriveFrom
      .withArgs('*suppressed*', `/`, `/44'/20036'/2000/${i}`)
      .returns(`validationRoot${i}`)
    toPublic.withArgs(`validationRoot${i}`).returns(`pubValRoot${i}`)
  }

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      deriveFrom
        .withArgs(
          'root',
          `/44'/20036'/100/10000/2`,
          `/44'/20036'/100/10000/2/${i}`
        )
        .returns(`validation${i}`)
      toPublic
        .withArgs(`validation${i}`)
        .returns(
          `npuba4jaftckeeba47fzizq3gs2vnnawj329tkiuh4xi2u8gurh3y2vu8jgbvndeh9sieut3eaaaaaaxrtumjidjk2y6fcdsb6rdy5gc9yfptsexhan92ch373d52z7y8izmz8j7rddg`
        )
    } else {
      deriveFrom
        .withArgs(
          'root',
          `/44'/20036'/100/10000/2`,
          `/44'/20036'/100/10000/2/${i}`
        )
        .returns(`validation${i}`)
      toPublic.withArgs(`validation${i}`).returns(`pubVal${i}`)
    }
  }

  await ValidationKeyMaster.recoveryValidationKey(
    wallet,
    account,
    account.addressData.validationKeys
  )

  expect(wallet.keys['b837699c'].privateKey).toBe('validation5')
  expect(wallet.keys['b837699c'].path).toBe(`/44'/20036'/100/10000/2/5`)
})

test('recoverValidationKeys with a genesis account', async () => {
  const wallet = JSON.parse(JSON.stringify(testWallet7MP4FVStart))
  const account =
    wallet.accounts['ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4']

  for (let i = 0; i < 30; i++) {
    if (i === 28) {
      deriveFrom
        .withArgs('*suppressed*', `/`, `/44'/20036'/2000/${i}`)
        .returns(`validationRoot${i}`)
      toPublic
        .withArgs(`validationRoot${i}`)
        .returns(
          `npuba4jaftckeebijwfxqwdyk3nt9bjxek7dq2mx2kjfgpbkq7dmrpa3rep5bsp3362idhqsyaaaaabaff879kt39fvjd7nntqutczzu2hm6u7vr73uutw3gqjxeqvgyjzf2es8ry7fi`
        )
    } else {
      deriveFrom
        .withArgs('*suppressed*', `/`, `/44'/20036'/2000/${i}`)
        .returns(`validationRoot${i}`)
      toPublic.withArgs(`validationRoot${i}`).returns(`pubVal${i}`)
    }
  }

  for (let i = 0; i < 30; i++) {
    deriveFrom
      .withArgs(
        'root',
        `/44'/20036'/100/10000/1`,
        `/44'/20036'/100/10000/1/${i}`
      )
      .returns(`validation${i}`)
    toPublic.withArgs(`validation${i}`).returns(`pubVal${i}`)
  }

  await ValidationKeyMaster.recoveryValidationKey(
    wallet,
    account,
    account.addressData.validationKeys
  )

  expect(wallet.keys['ec2761b6'].privateKey).toBe('validationRoot28')
  expect(wallet.keys['ec2761b6'].path).toBe(
    `/44'/20036'/100/1/44'/20036'/2000/28`
  )
})

test('recoverValidationKeys with a new account', async () => {
  const wallet = JSON.parse(JSON.stringify(testWallet7MP4FVStart))
  const account =
    wallet.accounts['ndafxgxquvuzrmrungp3kgn5jnsgptxd7th67ymxxwsscech']

  for (let i = 0; i < 10; i++) {
    deriveFrom
      .withArgs('*suppressed*', `/`, `/44'/20036'/2000/${i}`)
      .returns(`validationRoot${i}`)
    toPublic.withArgs(`validationRoot${i}`).returns(`pubVal${i}`)
  }

  for (let i = 0; i < 10; i++) {
    deriveFrom
      .withArgs(
        'root',
        `/44'/20036'/100/10000/4`,
        `/44'/20036'/100/10000/4/${i}`
      )
      .returns(`validation${i}`)
    toPublic.withArgs(`validation${i}`).returns(`pubVal${i}`)
  }

  const keyLength = wallet.keys.length

  await ValidationKeyMaster.recoveryValidationKey(
    wallet,
    account,
    account.addressData.validationKeys
  )

  expect(wallet.keys.length).toBe(keyLength)
})

test('recoverValidationKeys with a simple account (only one validation key)', async () => {
  const wallet = JSON.parse(JSON.stringify(testWallet7MP4FVStart))
  const account =
    wallet.accounts['ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3']

  for (let i = 0; i < 10; i++) {
    deriveFrom
      .withArgs('*suppressed*', `/`, `/44'/20036'/2000/${i}`)
      .returns(`validationRoot${i}`)
    toPublic.withArgs(`validationRoot${i}`).returns(`pubValRoot${i}`)
  }

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      deriveFrom
        .withArgs(
          'root',
          `/44'/20036'/100/10000/3`,
          `/44'/20036'/100/10000/3/${i}`
        )
        .returns(`validation${i}`)
      toPublic
        .withArgs(`validation${i}`)
        .returns(
          `npuba4jaftckeeb4v85jps39h79f8kfw8tnje2mx2b7496e99s5e3dk5mq8fefsfffsfzti4gaaaaaa3k3zqrfz6pe9gde3pa5yxjc9dz6aet25zpuyryy986fybetmgn9u224i4jp5t`
        )
    } else {
      deriveFrom
        .withArgs(
          'root',
          `/44'/20036'/100/10000/3`,
          `/44'/20036'/100/10000/3/${i}`
        )
        .returns(`validation${i}`)
      toPublic.withArgs(`validation${i}`).returns(`pubVal${i}`)
    }
  }

  await ValidationKeyMaster.recoveryValidationKey(
    wallet,
    account,
    account.addressData.validationKeys
  )

  console.log(`HERE: ${JSON.stringify(wallet, null, 2)}`)

  expect(wallet.keys['b837699c'].privateKey).toBe('validation5')
  expect(wallet.keys['b837699c'].path).toBe(`/44'/20036'/100/10000/3/5`)
})
