# [bsc] eth: override chainconfig before create engine for testing

- **Issue**: #2822
- **Status**: closed
- **Created**: 12/23/2024, 1:44:21 AM
- **Updated**: 3/3/2025, 2:12:12 AM
- **URL**: https://github.com/bnb-chain/bsc/pull/2822

## Description

### Description

eth: override chainconfig before create engine for testing

### Rationale

when create parlia engine, the signer will depend on the hardfork settings,
so override them before create engine
```
func LatestSigner(config *params.ChainConfig) Signer {
	var signer Signer
	if config.ChainID != nil {
		switch {
		case config.PragueTime != nil:
			signer = NewPragueSigner(config.ChainID)
		case config.CancunTime != nil:
			signer = NewCancunSigner(config.ChainID)
		case config.LondonBlock != nil:
			signer = NewLondonSigner(config.ChainID)
		case config.BerlinBlock != nil:
			signer = NewEIP2930Signer(config.ChainID)
		case config.EIP155Block != nil:
			signer = NewEIP155Signer(config.ChainID)
		default:
			signer = HomesteadSigner{}
		}
	} else {
		signer = HomesteadSigner{}
	}
	return signer
}
```

### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
