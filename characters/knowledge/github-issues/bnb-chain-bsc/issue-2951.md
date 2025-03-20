# [bsc] build(deps): bump golang.org/x/net from 0.34.0 to 0.36.0

- **Issue**: #2951
- **Status**: closed
- **Created**: 3/12/2025, 10:03:49 PM
- **Updated**: 3/17/2025, 10:57:37 PM
- **URL**: https://github.com/bnb-chain/bsc/pull/2951

## Labels

- dependencies
- go

## Description

Bumps [golang.org/x/net](https://github.com/golang/net) from 0.34.0 to 0.36.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/net/commit/85d1d54551b68719346cb9fec24b911da4e452a1"><code>85d1d54</code></a> go.mod: update golang.org/x dependencies</li>
<li><a href="https://github.com/golang/net/commit/cde1dda944dcf6350753df966bb5bda87a544842"><code>cde1dda</code></a> proxy, http/httpproxy: do not mismatch IPv6 zone ids against hosts</li>
<li><a href="https://github.com/golang/net/commit/fe7f0391aa994a401c82d829183c1efab7a64df4"><code>fe7f039</code></a> publicsuffix: spruce up code gen and speed up PublicSuffix</li>
<li><a href="https://github.com/golang/net/commit/459513d1f8abff01b4854c93ff0bff7e87985a0a"><code>459513d</code></a> internal/http3: move more common stream processing to genericConn</li>
<li><a href="https://github.com/golang/net/commit/aad0180cad195ab7bcd14347e7ab51bece53f61d"><code>aad0180</code></a> http2: fix flakiness from t.Log when GOOS=js</li>
<li><a href="https://github.com/golang/net/commit/b73e5746f64471c22097f07593643a743e7cfb0f"><code>b73e574</code></a> http2: don't log expected errors from writing invalid trailers</li>
<li><a href="https://github.com/golang/net/commit/5f45c776a9c4d415cbe67d6c22c06fd704f8c9f1"><code>5f45c77</code></a> internal/http3: make read-data tests usable for server handlers</li>
<li><a href="https://github.com/golang/net/commit/43c2540165a4d1bc9a81e06a86eb1e22ece64145"><code>43c2540</code></a> http2, internal/httpcommon: reject userinfo in :authority</li>
<li><a href="https://github.com/golang/net/commit/1d78a085008d9fedfe3f303591058325f99727d7"><code>1d78a08</code></a> http2, internal/httpcommon: factor out server header logic for h2/h3</li>
<li><a href="https://github.com/golang/net/commit/0d7dc54a591c12b4bd03bcd745024178d03d9218"><code>0d7dc54</code></a> quic: add Conn.ConnectionState</li>
<li>Additional commits viewable in <a href="https://github.com/golang/net/compare/v0.34.0...v0.36.0">compare view</a></li>
</ul>
</details>
<br />


[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/net&package-manager=go_modules&previous-version=0.34.0&new-version=0.36.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)

Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.

[//]: # (dependabot-automerge-start)
[//]: # (dependabot-automerge-end)

---

<details>
<summary>Dependabot commands and options</summary>
<br />

You can trigger Dependabot actions by commenting on this PR:
- `@dependabot rebase` will rebase this PR
- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it
- `@dependabot merge` will merge this PR after your CI passes on it
- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it
- `@dependabot cancel merge` will cancel a previously requested merge and block automerging
- `@dependabot reopen` will reopen this PR if it is closed
- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually
- `@dependabot show <dependency name> ignore conditions` will show all of the ignore conditions of the specified dependency
- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)
- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)
- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)
You can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/bnb-chain/bsc/network/alerts).

</details>