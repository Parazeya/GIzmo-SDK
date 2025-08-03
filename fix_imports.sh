#!/bin/bash
# Исправляет импорты GizmoClient.js во всех категориях v1 и v2
find ./src/v1 -name '*.js' -exec sed -i 's|from ["\']GizmoClient\.js["\']|from "../GizmoClient.js"|g' {} +
find ./src/v2 -name '*.js' -exec sed -i 's|from ["\']GizmoClient\.js["\']|from "../GizmoClient.js"|g' {} +
