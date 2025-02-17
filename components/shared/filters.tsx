"use client";

import {
  CheckboxFiltersGroup,
  FilterCheckbox,
  RangeSlider,
} from "@/components/shared";
import { Title } from "./title";
import React from "react";
import { Input } from "@/components/ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
  const allIngredients = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox name="first" text="Можно собирать" value="1" />
        <FilterCheckbox name="second" text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider min={0} max={1000} value={[0, 1000]} step={10} />
      </div>

      <CheckboxFiltersGroup
        name="ingredients"
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={allIngredients.slice(0, 6)}
        items={allIngredients}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};
