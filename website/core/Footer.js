/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting-started.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.pageUrl('help.html', this.props.language)}>
              Getting Help
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://mediacenterio-slack.herokuapp.com/">Developer Chat</a>
            <a href="https://twitter.com/m0ngr31" target="_blank">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href="https://github.com/m0ngr31/kodi-alexa">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/m0ngr31/kodi-alexa/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <div style={{textAlign: 'center', margin: 20}}>
          <img src="/img/kanzi.svg" width="80" alt="Kanzi"></img>
          <img src="/img/lexigram.svg" width="80" alt="Koko"></img>
          <img src="/img/koko.svg" width="80" alt="Lexigram"></img>
        </div>

        <section className="copyright">
          Copyright &copy; {currentYear} Joe Ipson
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
