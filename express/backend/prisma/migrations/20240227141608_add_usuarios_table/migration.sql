/*
  Warnings:

  - You are about to alter the column `preco` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - Added the required column `updated_at` to the `tipos_usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` MODIFY `preco` DECIMAL NOT NULL;

-- AlterTable
ALTER TABLE `tipos_usuarios` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
