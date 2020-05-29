<template>
  <div id="menucontainer">
    <span class="title">MELINDA SANDSTRÖM-WAGNER</span>
    <div id="contactcontainer">
      <div class="contactitem">
        <a href="mailto:sandstrommelinda@gmail.com?Subject=Hi%20Melinda">
          <img src="../assets/gmail-logo.png" />
        </a>
      </div>
      <div class="contactitem">
        <a
          href="https://www.linkedin.com/in/melinda-sandstr%C3%B6m-wagner/"
          target="_blank"
        >
          <img src="../assets/linkedin-logo.png" />
        </a>
      </div>
      <div class="contactitem">
        <a href="https://github.com/MelindaSW" target="_blank">
          <img src="../assets/GitHub-Mark-64px.png" />
        </a>
      </div>
      <div class="contactitem">
        <a
          href="https://www.instagram.com/melindas_crosshatching/"
          target="_blank"
        >
          <img src="../assets/instagram-logo.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'Menu' }
</script>

<style scoped>
#menucontainer {
  background-color: rgba(90, 129, 144, 0.747);
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  height: 10%;
  font-size: 2rem;
  width: 100%;
}

span {
  margin-left: 2rem;
  margin-right: 2rem;
}

#contactcontainer {
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
  display: flex;
  margin-left: 3rem;
  padding: 0.7rem;
}

.contactitem {
  margin-right: 1rem;
  margin-left: 1rem;
}

img {
  height: 2rem;
}
</style>
