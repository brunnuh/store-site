<template>
    <section id="aboutus" class="aboutus-view">
        <h2 class="title">
            Sobre
        </h2>
        <div class="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat rem illo dicta facere soluta, beatae obcaecati maxime autem iure porro minus quas asperiores? Sed eaque ut cumque distinctio debitis. Alias.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ratione et doloremque ipsam cumque alias praesentium non voluptate nostrum? Fuga, minus laborum! Minima totam doloremque animi maxime. Deleniti, molestias placeat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit iusto sunt tenetur tempore placeat vero quam expedita corporis eligendi distinctio recusandae qui eius quia, perspiciatis maiores voluptatibus nesciunt repellat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam quidem, delectus, eaque exercitationem voluptate modi natus quas cupiditate suscipit nesciunt itaque, maiores quod repudiandae? Rem expedita aspernatur qui quam.
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .aboutus-view{
        grid-area: AB;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0px 230px;
         h2{
            font-size: 50px;
            margin-bottom: 50px;
            color: var(--primary);
        }
        .content{
            font-size: 20px;
        }
    }
</style>