<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import logo from "../assets/images/branding/logo-Goxu.png";
import {
  LayoutGrid,
  UtensilsCrossed,
  ClipboardList,
  Receipt,
  LogOut,
  Menu,
  X,
} from "lucide-vue-next";

const router = useRouter();

const navItems = [
  { name: "admin-dashboard", label: "Resumen", icon: LayoutGrid },
  { name: "admin-products", label: "Productos", icon: UtensilsCrossed },
  { name: "admin-orders", label: "Pedidos", icon: ClipboardList },
  { name: "admin-billing", label: "Facturación", icon: Receipt },
];

const admin = ref({
  name: "Admin User",
  email: "admin@goxu.com",
  avatar: "https://i.pravatar.cc/150?img=47",
});

const mobileMenuOpen = ref(false);

function closeMenu() {
  mobileMenuOpen.value = false;
}

watch(() => router.currentRoute.value.fullPath, closeMenu);

function logout() {
  closeMenu();
  router.push({ name: "login" });
}
</script>

<template>
  <div class="min-h-screen w-full flex overflow-x-hidden bg-[#7c8874]">
    <div
      class="md:hidden fixed top-0 left-0 right-0 z-30 bg-inverse-surface px-5 py-3 flex items-center justify-between"
    >
      <RouterLink to="/admin" class="hidden md:block w-fit">
        <img :src="logo" alt="Goxu" class="h-16 w-auto" />
      </RouterLink>

      <button
        type="button"
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="flex h-8 w-8 items-center justify-center"
        :aria-label="mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
      >
        <Menu v-if="!mobileMenuOpen" class="w-6 h-6 text-inverse-on-surface" />
        <X v-else class="w-6 h-6 text-inverse-on-surface" />
      </button>
    </div>

    <div
      v-if="mobileMenuOpen"
      @click="closeMenu"
      class="md:hidden fixed inset-0 bg-black/40 z-20"
    ></div>

    <aside
      class="w-64 shrink-0 bg-inverse-surface flex flex-col justify-between p-6 border-r border-outline-variant/20 fixed inset-y-0 left-0 z-30 transition-transform duration-200 md:relative md:translate-x-0"
      :class="mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div>
        <RouterLink to="/admin" class="block">
          <img :src="logo" alt="Goxu" class="h-16 w-auto" />
        </RouterLink>
        <nav class="mt-10 md:mt-10 flex flex-col gap-1">
          <RouterLink
            v-for="item in navItems"
            :key="item.name"
            :to="{ name: item.name }"
            @click="closeMenu"
            class="group flex items-center gap-3 px-4 py-3 rounded-lg font-ui font-semibold text-inverse-on-surface/80 transition-all duration-200 hover:bg-highlight/25 hover:text-inverse-on-surface"
            exact-active-class="bg-highlight text-on-primary-container"
          >
            <component
              :is="item.icon"
              class="w-4 h-4 text-highlight/80 transition-transform duration-200 group-hover:scale-105"
  />
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>

      <div>
        <hr class="border-inverse-on-surface/15 mb-4"  />
        <div class="flex items-center gap-3">
          <img
            :src="admin.avatar"
            alt=""
            class="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p class="font-ui text-sm font-semibold text-inverse-on-surface">
              {{ admin.name }}
            </p>
            <p class="font-ui text-xs text-inverse-on-surface/50">
              {{ admin.email }}
            </p>
          </div>
        </div>
        <button
          @click="logout"
          class="group mt-4 flex items-center gap-2 font-ui text-sm font-semibold text-highlight transition-colors duration-200 hover:text-highlight/80">
          <LogOut class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"/>
          Log out
        </button>
      </div>
    </aside>

    <main class="flex-1 min-w-0 w-full max-w-full p-4 md:p-8 mt-14 md:mt-0">
      <RouterView />
    </main>
  </div>
</template>
