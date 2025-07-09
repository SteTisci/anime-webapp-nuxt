<template>
  <footer>
    <div class="container">
      <div class="disclaimer">
        <p>All Rights Reserved, all files on this site are the property of their respective and rightful owners.</p>
        <a href="https://github.com/SteTisci" target="_blank" rel="noopener noreferrer">
          <img src="/github-logo.png" alt="github logo" width="30px" height="30px" />
        </a>
        <p>
          Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated
          third parties.
        </p>
      </div>
      <div class="copyright">
        <p>Copyright © SteTisci All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #121212;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
}

.container {
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: jersey;
  font-size: 1.2rem;
  padding: 20px 0 0;
}

.disclaimer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

img {
  margin-top: 14px;
}

div p {
  width: 300px;
  line-height: normal;
  text-wrap: pretty;
}

.copyright {
  text-align: center;
  font-size: 1.1rem;
  padding-top: 25px;
}
</style>
