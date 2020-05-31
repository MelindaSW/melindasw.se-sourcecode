<template>
  <div id="menucontainer">
    <router-link :to="{ name: 'Home' }"
      ><span class="title">MELINDA SANDSTRÖM-WAGNER</span></router-link
    >
    <ul>
      <router-link :to="{ name: 'Projects' }">
        <li><span>Projects</span></li></router-link
      >
      <router-link :to="{ name: 'Gallery' }">
        <li><span>Gallery</span></li>
      </router-link>
    </ul>
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

<style>
#menucontainer {
  background-color: rgba(90, 129, 144, 0.747);
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 78px;
  font-size: 2rem;
  width: 100%;
}

ul {
  list-style-type: none;
}

li {
  display: inline;
  margin: 2rem;
}

.title {
  margin-left: 2rem;
  margin-right: 2rem;
}

#contactcontainer {
  background-color: rgb(255, 255, 255);
  border-radius: 0.7rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: auto;
  margin-right: 2%;
  padding: 0.4rem;
}

.contactitem {
  margin-right: 1rem;
  margin-left: 1rem;
}

img {
  height: 2rem;
}

a:link {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

a:visited {
  color: rgb(255, 255, 255);
}

a:hover {
  color: rgba(90, 129, 144, 0.788);
}

a:active {
  color: rgb(255, 255, 255);
}
</style>
