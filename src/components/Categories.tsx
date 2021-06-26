import { navigate, useBasePath, usePath } from 'raviger';
import React, { PropsWithChildren } from 'react';
import { arraysSameElements } from '../common';
import Navigator from '../common/Navigator';
import Icon from '../components/Icon';
import useMatchPath from '../hooks/useMatchPath';
import useProductQueryBuilder from '../hooks/useProductQuery';
import useTags from '../hooks/useTags';
import ProductQueryBuilder from '../model/ProductQueryBuilder';
import {
   MenuItemStyle,
   MenuItemText,
   MenuListStyle,
} from '../style/menu.style';
import { Header2 } from '../style/typography.style';

export type CategoriesProps = PropsWithChildren<unknown>;

export type CategoryItemProps = {
   name: string;
   category?: string;
   primary?: boolean;
   icon?: string;
   tag?: string;
};

export default function Categories({}: CategoriesProps) {
   const current = useProductQueryBuilder();

   return (
      <div className="shopping-categories-anchor">
         <aside className="shopping-categories">
            <Header2 color="normal">Meny</Header2>
            <MenuListStyle>
               <Category primary name="Start" category="" icon="home" />
               <Category
                  primary
                  name="Favoriter"
                  tag="favorit"
                  icon="favorite_outline"
               />
               <Category
                  primary
                  name="Historik"
                  tag="previous"
                  icon="history"
               />
            </MenuListStyle>
            <Header2 color="normal">Kategorier</Header2>
            <MenuListStyle>
               <Category name="Mejeri" category="mejeri" />
               <Category name="Bröd" category="bröd" />
               <Category name="Plupp" category="plupp" />
               <Category name="Grönisar" category="grönsaker" />
            </MenuListStyle>
         </aside>
      </div>
   );

   function Category({
      name,
      category,
      primary,
      icon,
      tag,
   }: CategoryItemProps) {
      const q = ProductQueryBuilder.base().appendCategories(category).appendTags(tag);
      const match = ProductQueryBuilder.equal(current, q);

      return (
         <MenuItemStyle
            as="button"
            onClick={() => Navigator.viewProducts(q)}
            variant={primary ? 'primary' : 'normal'}
            active={match}
         >
            {icon && <Icon size={18}>{icon}</Icon>}
            <MenuItemText>{name}</MenuItemText>
         </MenuItemStyle>
      );
   }
}
