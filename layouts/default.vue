<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-ic-baseline-dashboard',
    to: '/',
  },
  {
    label: 'Users',
    icon: 'i-ic-baseline-people',
    to: '/users',
  },
  {
    label: 'Settings',
    icon: 'i-ic-baseline-settings',
    to: '/settings',
  },
];
</script>

<template>
  <div class="flex flex-row bg-black">
    <div class="flex flex-col">
      <div id="menu" class="flex flex-col">
        <UVerticalNavigation
          :links="links"
          class="w-full"
          :ui="{
            label: 'truncate relative text-gray-900 dark:text-white flex-initial w-32 text-left',
          }"
        />
      </div>
      <div id="user" class="flex flex-col"></div>
    </div>
    <slot />
  </div>
</template>
