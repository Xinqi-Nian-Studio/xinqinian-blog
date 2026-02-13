---
title: "Vue 3 入门指南"
date: 2024-05-15
category: "前端开发"
tag:
  - Vue3
  - 前端框架
  - 教程
---

# Vue 3 入门指南

Vue 3 带来了许多新特性和改进...

## Composition API

```javascript
import { ref, computed } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)