import type { GatsbyNode } from 'gatsby'
import path from 'path'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
	actions,
}) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@pages': path.resolve(__dirname, 'src/pages'),
				'@layouts': path.resolve(__dirname, 'src/layouts'),
				'@components': path.resolve(__dirname, 'src/components/'),
				'@theme': path.resolve(__dirname, 'src/theme'),
				'@utils': path.resolve(__dirname, 'src/utils'),
				'@hooks': path.resolve(__dirname, 'src/hooks'),
				'@assets': path.resolve(__dirname, 'src/assets'),
				'@animations': path.resolve(__dirname, 'src/animations'),
			},
		},
	})
}
