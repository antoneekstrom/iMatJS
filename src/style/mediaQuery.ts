
export type MediaQueryPropertyMap = {
   minWidth: MediaQueryWidth
   maxWidth: MediaQueryWidth
}

export const MEDIA_QUERY_PROPERTY_NAMES: {[key in MediaQueryProperty]: string} = {
   'minWidth': 'min-width',
   'maxWidth': 'max-width'
}

export const MEDIA_QUERY_WIDTHS = {
   mobile: '500px',
   small: '600px',
   medium: '900px',
   large: '1400px',
   desktop: '1600px',
}

export enum MediaQueryClassNames {
   Active = 'media-query-active',
}

export type MediaQueryProperty = keyof MediaQueryPropertyMap
export type MediaQueryWidth = keyof typeof MEDIA_QUERY_WIDTHS

export type MediaQueryStyleProps = Partial<MediaQueryPropertyMap>

/**
 * Creates a CSS mediaquery string.
 * ```
 * css`
 *    ${makeMediaQuery({maxWidth: 'mobile'})} {
 *       flex-direction: column;
 *    }
 * `
 * ```
 * @param properties Object specifying which properties to query
 * @returns The mediaquery
 */
export function makeMediaQuery(properties: Partial<MediaQueryPropertyMap>) {
   return `@media (${Object.entries(properties).map(
      ([property, value]) => `${MEDIA_QUERY_PROPERTY_NAMES[property as MediaQueryProperty]}: ${MEDIA_QUERY_WIDTHS[value as MediaQueryWidth]}`
   ).join(' ')})`
}